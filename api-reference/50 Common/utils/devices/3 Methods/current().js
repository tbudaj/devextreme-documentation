﻿platformName = ko.observable("undefined");
getPlatform = function () {
  platformName(DevExpress.devices.current().platform);
};