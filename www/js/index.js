/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        var obj = document.getElementById("content");
        obj.value = "uuid:" + window.device.uuid + "\r\n";
        obj.value += "model:" + window.device.model + "\r\n";
        obj.value += "platform:" + window.device.platform + "\r\n";
        obj.value += "version:" + window.device.version + "\r\n";
        obj.value += "cordova:" + window.device.cordova + "\r\n";
        // window.navigator.accelerometer.getCurrentAcceleration(function(acc) {obj.value += "X:" + acc.x + "\r\nY:" + acc.y + "\r\nZ:" + acc.z + "\r\ntime:" + acc.timestam	p;}, function() {});
        // obj.value += "CurrentAcceleration:" + window.navigator.accelerometer.getCurrentAcceleration + "\r\n";
        obj.value += "network:" + window.navigator.connection.type + "\r\n";
        obj.value += "width:" + window.screen.availWidth + "\r\n";
        obj.value += "height:" + window.screen.availHeight + "\r\n";
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
