if (typeof Safe === "undefined") var Safe = {};

Safe.FormContext = new (function () {
  this.getAttributeValue = function (formContext, attName) {
    let attribute = formContext.getAttribute(attName);
    return attribute ? attribute.getValue() : null;
  };

  this.getAttributeLookupValue = function (formContext, attName) {
    let value = formContext.getAttribute(attName).getValue();
    if (!value) return null;

    value = value[0];
    value["id"] = value["id"].replace("{", "").replace("}", "");

    return value;
  };

  this.setAttributeValue = function (formContext, attName, attValue) {
    let attribute = formContext.getAttribute(attName);
    attribute !== null || attribute !== "undefined" ? attribute.setValue(attValue) : null;
  };

  this.getVisible = function (formContext, attName) {
    const control = formContext.getControl(attName);
    return control ? control.getVisible() : null;
  };

  this.setVisible = function (formContext, attName, attValue) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined" ? control.setVisible(attValue) : null;
  };
  this.setTabVisible = function (formContext, tabName, value) {
    let tab = formContext.ui.tabs.get(tabName);
    tab !== null || tab !== "undefined" ? tab.setVisible(value) : null;
  };

  this.setDisabled = function (formContext, attName, attValue) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined" ? control.setDisabled(attValue) : null;
  };

  this.getRequiredLevel = function (formContext, attName) {
    const attribute = formContext.getAttribute(attName);
    return attribute ? attribute.getRequiredLevel() : null;
  };

  this.setRequiredLevel = function (formContext, attName, attValue) {
    let attribute = formContext.getAttribute(attName);
    return attribute !== null || attribute !== "undefined" ? attribute.setRequiredLevel(attValue) : null;
  };

  this.setControlNotification = function (formContext, attName, message, uniqueId) {
    let control = formContext.getControl(attName);
    return control !== null || control !== "undefined" ? control.setNotification(message, uniqueId) : null;
  };
  this.clearControlNotification = function (formContext, attName, uniqueId) {
    let control = formContext.getControl(attName);
    return control !== null || control !== "undefined" ? control.clearNotification(uniqueId) : null;
  };

  this.setFormNotification = function (formContext, message, level, uniqueId) {
    return formContext.ui.setFormNotification(message, level, uniqueId);
  };

  this.clearFormNotification = function (formContext, uniqueId) {
    return formContext.ui.clearFormNotification(uniqueId);
  };

  this.getEntityId = function (formContext) {
    return formContext.data.entity.getId();
  };
  this.getFormType = function (formContext) {
    return formContext.ui.getFormType();
  };
  this.openAlertDialog = function (alertStrings, alertOptions) {
    return Xrm.Navigation.openAlertDialog(alertStrings, alertOptions);
  };
  this.openErrorDialog = function (errorOptions) {
    Xrm.Navigation.openErrorDialog(errorOptions);
  };
  this.openUrl = function (url, openUrlOptions) {
    Xrm.Navigation.openUrl(url, openUrlOptions);
  };
  this.openConfirmDialog = function (confirmStrings, confirmOptions) {
    return Xrm.Navigation.openConfirmDialog(confirmStrings, confirmOptions);
  };
  this.isFieldDirty = function (formContext, ctrlName) {
    let control = formContext.getControl(ctrlName);
    if (!control) throw new Error("Control " + ctrlName + " is not presented on the form");

    return formContext.getAttribute(ctrlName).getIsDirty();
  };
  this.addOnPostSave = function (formContext, functionName) {
    formContext.data.entity.addOnPostSave(functionName);
  };

  this.addOnSave = function (formContext, attributeName, functionName) {
    if (!attributeName || !formContext.getAttribute(attributeName)) {
      formContext.data.entity.addOnSave(functionName);
      return;
    }

    formContext.data.entity.addOnSave(function () {
      functionName(formContext, attributeName);
    });
  };

  this.addOnChange = function (formContext, attributeName, functionName) {
    let attribute = formContext.getAttribute(attributeName);
    return attribute !== null || attribute !== "undefined" ? attribute.addOnChange(functionName) : null;
  };
  this.addOnStageChange = function (formContext, functions) {
    return formContext.data.process.addOnStageChange(functions);
  };
  this.addOnPreStageChange = function (formContext, functions) {
    return formContext.data.process.addOnPreStageChange(functions);
  };
  this.addOnChangeWithParam = function (formContext, attributeName, functionName) {
    let attribute = formContext.getAttribute(attributeName);
    return attribute != null && attribute != "undefined"
      ? attribute.addOnChange(function () {
          functionName(formContext, attributeName);
        })
      : null;
  };
  this.setSectionVisible = function (formContext, tabName, sectionName, value) {
    let tab = formContext.ui.tabs.get(tabName);
    let section = tab.sections.get(sectionName);
    section !== null || section !== "undefined" ? section.setVisible(value) : null;
  };
  this.setTabVisible = function (formContext, tabName, value) {
    let tab = formContext.ui.tabs.get(tabName);
    tab !== null && tab !== "undefined" ? tab.setVisible(value) : null;
  };
  this.setFilterXml = function (formContext, controlName, fetchXml) {
    let control = formContext.getControl(controlName);
    if (control !== null || control !== "undefined") {
      control.setFilterXml(fetchXml);
      control.refresh();
      return;
    } else {
      return null;
    }
  };
  this.getPicklistOption = function (formContext, attName, attValue) {
    let attribute = formContext.getAttribute(attName);
    return attribute !== null || attribute !== "undefined" ? attribute.getOption(attValue) : null;
  };
  this.removePicklistOption = function (formContext, attName, attValue) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined" ? control.removeOption(attValue) : null;
  };
  this.addPicklistOption = function (formContext, attName, attValue) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined" ? control.addOption(attValue) : null;
  };
  this.addPicklistOptions = function (formContext, attName, attValues) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined"
      ? attValues.forEach((element) => {
          control.addOption(element);
        })
      : null;
  };
  this.clearPickListOptions = function (formContext, attName) {
    let control = formContext.getControl(attName);
    control !== null || control !== "undefined" ? control.clearOptions() : null;
  };
  this.getPicklistOptions = function (formContext, attName, attValue) {
    let control = formContext.ui.controls.get(attName);
    if (control !== null || control !== "undefined") {
      return control.getAttribute().getOptions();
    }
  };

  this.getControl = function (formContext, controlName) {
    return formContext.ui.controls.get(controlName);
  };

  this.getSubGridSelectedRows = function (formContext, subgridName) {
    let control = formContext.getControl(subgridName);
    if (control !== null || control !== "undefined") {
      return control.getGrid().getSelectedRows();
    }
  };

  this.getSubGridSelectedRowsLength = function (formContext, subgridName) {
    let control = formContext.getControl(subgridName);
    if (control !== null || control !== "undefined") {
      return control.getGrid().getSelectedRows().getLength();
    }
  };
  this.getSubGridRowsLength = function (formContext, subgridName) {
    let control = formContext.getControl(subgridName);
    if (control !== null || control !== "undefined") {
      return control.getGrid().getRows().getLength();
    }
  };
  this.getSubGridSelectedRowRecordId = function (formContext, subgridName, recordIndex) {
    let control = formContext.getControl(subgridName);
    return control.getGrid().getSelectedRows().getAll()[recordIndex].getData().getEntity().getId();
  };

  this.saveForm = function (formContext, saveMode) {
    formContext.data.save(saveMode);
  };

  this.setActiveProcess = function (formContext, processId, callBackFunction) {
    formContext.data.process.setActiveProcess(processId, callBackFunction);
  };

  this.getSelectedStage = function (formContext) {
    return formContext.data.process.getSelectedStage();
  };

  this.addPreSearchCustomFilter = function (formContext, attribute, filter) {
    formContext.getControl(attribute).addPreSearch(function () {
      formContext.getControl(attribute).addCustomFilter(filter);
    });
  };

  this.getActiveProcess = function (formContext) {
    return formContext.data.process.getActiveProcess();
  };
})();
