sap.ui.define([
	"example/es6/ZES6_MASTER_DETAIL_TEMPLATE/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function (BaseController, JSONModel) {
	"use strict";
	const addSS = async(a, b) => {
		return Promise.resolve(a + b);
	}
   
	return BaseController.extend("example.es6.ZES6_MASTER_DETAIL_TEMPLATE.controller.App", {

		onInit: function () {
			this.process = this.process.bind(this)
			var oViewModel,
				fnSetAppNotBusy,
				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

			oViewModel = new JSONModel({
				busy: true,
				delay: 0,
				layout: "OneColumn",
				previousLayout: "",
				actionButtonsInfo: {
					midColumn: {
						fullScreen: false
					}
				}
			});
			this.setModel(oViewModel, "appView");

			fnSetAppNotBusy = function () {
				oViewModel.setProperty("/busy", false);
				oViewModel.setProperty("/delay", iOriginalBusyDelay);
			};

			// since then() has no "reject"-path attach to the MetadataFailed-Event to disable the busy indicator in case of an error
			this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
			this.getOwnerComponent().getModel().attachMetadataFailed(fnSetAppNotBusy);

			// apply content density mode to root view
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

			// test es6

			let arr = [1, 2, 3, () => {
				console.log('test string')
			}];
			let arr2 = [...arr];
			console.log(arr2);
			arr2[3]();
			this.process();
		},
		process: async() => {
			const that = this;
			let a = 1,
				b = 2;
			let c = await addSS(a, b);
			console.log(c)
			return c;
		},
	});
});