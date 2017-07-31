//
//  WatchKitModule.h
//  SeattleJSApp
//
//  Created by Carlos Paelinck on 7/29/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WatchConnectivity/WatchConnectivity.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface WatchKitModule : RCTEventEmitter <RCTBridgeModule, WCSessionDelegate>

- (void) activateWatchKitSession;

- (void) sendMessage;

- (void) loadData:(NSArray<NSDictionary<NSString  *, id> *> *)data;

@end
