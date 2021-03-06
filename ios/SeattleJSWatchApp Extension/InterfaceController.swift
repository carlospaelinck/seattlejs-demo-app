//
//  InterfaceController.swift
//  SeattleJSWatchApp Extension
//
//  Created by Carlos Paelinck on 7/29/17.
//  Copyright © 2017 Formidable. All rights reserved.
//

import WatchKit
import WatchConnectivity
import Foundation
import HealthKit


class InterfaceController: WKInterfaceController, WCSessionDelegate {
  @IBOutlet private var table: WKInterfaceTable!
  
  private var data: [[String: Any]] = [[:]] {
    didSet {
      configureTable(with: data)
    }
  }
  
  override func willActivate() {
    // This method is called when watch view controller is about to be visible to user
    super.willActivate()
    
    if WCSession.isSupported() {
      let session = WCSession.default()
      session.delegate = self
      session.activate()
    }
  }
  
  
  
  func session(_ session: WCSession,
               activationDidCompleteWith activationState: WCSessionActivationState,
               error: Error?) {
    switch activationState {
    case .activated:
      WCSession.default().sendMessage(
        [ "eventName" : "GetInitialData" ],
        replyHandler: { payload in
          debugPrint(payload)
        },
        errorHandler: nil
      )
      
    default:
      break
    }
  }
  
  func session(_ session: WCSession,
               didReceiveMessage message: [String : Any],
               replyHandler: @escaping ([String : Any]) -> Void) {
    
    if let payload = message["payload"] as? [[String: Any]] {
      data = payload
    }
  }
  
  private func configureTable(with data: [[String: Any]]) {
    table.setNumberOfRows(data.count, withRowType: "doggoRowType")
    
    (0..<table.numberOfRows).forEach { index in
      guard
        let name = data[index]["name"] as? String,
        let breed = data[index]["breed"] as? String
        else { return }
      
      let row = table.rowController(at: index) as? DoggoRowType
      row?.nameLabel.setText(name)
      row?.breedLabel.setText(breed)
    }
  }
  
  override func table(_ table: WKInterfaceTable, didSelectRowAt rowIndex: Int) {
    guard
      let selectedId = data[rowIndex]["id"] as? String,
      let name = data[rowIndex]["name"] as? String,
      let breed = data[rowIndex]["breed"] as? String
      else { return }
    
    let okAction = WKAlertAction(
      title: "Show on iPhone",
      style: .default,
      handler: {
        WCSession.default().sendMessage(
          [
            "eventName" : "ItemSelected",
            "payload": [ "id" : selectedId ]
          ],
          replyHandler: { _ in },
          errorHandler: { debugPrint($0, separator: "", terminator: "/n") }
        )
      }
    )
    
    let cancelAction = WKAlertAction(
      title: "Cancel",
      style: .cancel,
      handler: {}
    )
    
    presentAlert(
      withTitle: name,
      message: breed,
      preferredStyle: .actionSheet,
      actions: [ okAction, cancelAction ]
    )
    
  }
}
