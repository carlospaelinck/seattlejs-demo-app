//
//  WatchKitModule.m
//  SeattleJSApp
//
//  Created by Carlos Paelinck on 7/29/17.
//  Copyright © 2017 Formidable. All rights reserved.
//

#import "WatchKitModule.h"

@implementation WatchKitModule

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents {
  return @[
    @"ItemSelected",
    @"GetInitialData"
  ];
}

RCT_EXPORT_METHOD(activateWatchKitSession) {
  if ([WCSession isSupported]) {
    WCSession *session = [WCSession defaultSession];
    session.delegate = self;
    [session activateSession];
  }
}

RCT_EXPORT_METHOD(sendMessage) {
  NSDictionary<NSString *, NSString *> *message = @{ @"name" : @"Carlos" };
  [[WCSession defaultSession] sendMessage: message
                             replyHandler: ^(NSDictionary<NSString *, id> * _Nonnull replyMessage) {
                               NSLog(@"%@", replyMessage);
                             }
                             errorHandler: ^(NSError * _Nonnull error) {
                               NSLog(@"%@", error);
                             }];
}

RCT_EXPORT_METHOD(loadData:(NSArray<NSDictionary<NSString  *, id> *> *)data) {
  NSDictionary<NSString *, NSString *> *message = @{ @"payload" : data };
  [[WCSession defaultSession] sendMessage: message
                             replyHandler: ^(NSDictionary<NSString *, id> * _Nonnull replyMessage) {
                               NSLog(@"%@", replyMessage);
                             }
                             errorHandler: ^(NSError * _Nonnull error) {
                               NSLog(@"%@", error);
                             }];
}

- (void)session:(WCSession *)session didReceiveMessage:(NSDictionary<NSString *,id> *)message replyHandler:(void (^)(NSDictionary<NSString *, id> * _Nonnull))replyHandler {
  NSString *eventName = message[@"eventName"];
  NSDictionary<NSString *, id> *body = message[@"payload"];
  [self sendEventWithName: eventName body: body];
}

- (void)session:(nonnull WCSession *)session activationDidCompleteWithState:(WCSessionActivationState)activationState error:(nullable NSError *)error {
}


- (void)sessionDidBecomeInactive:(nonnull WCSession *)session {
}


- (void)sessionDidDeactivate:(nonnull WCSession *)session {

}


@end
