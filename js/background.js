/**
 * Copyright 2011 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author opensource@google.com
 * @license Apache License, Version 2.0.
 */
function handleRequest(request, sender, cb) {
  // Simply relay the request. This lets content.js talk to bar.js.
  chrome.tabs.sendMessage(sender.tab.id, request, cb);
  return true;
}
chrome.runtime.onMessage.addListener(handleRequest);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {type: 'toggleBar'});
});

// var develop_tools_id = null;
//
// function showPage(tab) {
//     if (develop_tools_id) {
//         chrome.tabs.update(develop_tools_id, {
//             active: true
//         });
//     } else {
//         chrome.tabs.create({
//                 url: chrome.extension.getURL("../index.html"),
//                 selected: true
//             },
//             function (tab) {
//                 develop_tools_id = tab.id;
//             })
//     }
// }
//
// chrome.browserAction.onClicked.addListener(
//     function (tab) {
//         showPage(tab);
//     }
// );
