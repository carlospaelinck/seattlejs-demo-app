//
//  InterfaceController.swift
//  SeattleJSWatchApp Extension
//
//  Created by Carlos Paelinck on 7/29/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import WatchKit
import WatchConnectivity
import Foundation


class InterfaceController: WKInterfaceController, WCSessionDelegate {
  
  override func willActivate() {
    // This method is called when watch view controller is about to be visible to user
    super.willActivate()
    
    if WCSession.isSupported() {
      let session = WCSession.default()
      session.delegate = self
      session.activate()
    }
  }
  
  
  
  func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
  
  }
  
  @IBAction func buttonWasSelected() {
    WCSession.default().sendMessage(
      ["name":"Hello Carlos"],
      replyHandler: { _ in },
      errorHandler: { error in print(error) }
    )
  }
  
  func session(_ session: WCSession, didReceiveMessage message: [String : Any], replyHandler: @escaping ([String : Any]) -> Void) {
    let action = WKAlertAction(title: "OK", style: .default, handler: {
      _ in
      
    })
    presentAlert(
      withTitle: "Title",
      message: message["name"] as? String ?? "",
      preferredStyle: .alert,
      actions: [ action ]
    )
  }
}
