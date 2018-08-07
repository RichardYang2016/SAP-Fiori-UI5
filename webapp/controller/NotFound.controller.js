sap.ui.define([
	"example/es6/ZES6_MASTER_DETAIL_TEMPLATE/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("example.es6.ZES6_MASTER_DETAIL_TEMPLATE.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
