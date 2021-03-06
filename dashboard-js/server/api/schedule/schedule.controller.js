'use strict';

var activiti = require('../../components/activiti');
var nodeLocalStorage = require('node-localstorage').LocalStorage;
var localStorage = new nodeLocalStorage('./scratch');

exports.getSchedule = function(req, res) {
  var options = {
    path: 'action/flow/getSheduleFlowIncludes',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.setSchedule = function(req, res) {
  var options = {
    path: 'action/flow/setSheduleFlowInclude',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
      nID: req.query.nID,
      sName: req.query.sName,
      sRegionTime: req.query.sRegionTime,
      saRegionWeekDay: req.query.saRegionWeekDay,
      sDateTimeAt: req.query.sDateTimeAt,
      sDateTimeTo: req.query.sDateTimeTo,
      nLen: req.query.nLen,
      sLenType: req.query.sLenType,
      sData: req.query.sData,
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.deleteSchedule = function(req, res) {
  var options = {
    path: 'action/flow/removeSheduleFlowInclude',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
      nID: req.query.nID
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.getExemptions = function(req, res) {
  var options = {
    path: 'action/flow/getSheduleFlowExcludes',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.setExemption = function(req, res) {
  var options = {
    path: 'action/flow/setSheduleFlowExclude',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
      nID: req.query.nID,
      sName: req.query.sName,
      sRegionTime: req.query.sRegionTime,
      saRegionWeekDay: req.query.saRegionWeekDay,
      sDateTimeAt: req.query.sDateTimeAt,
      sDateTimeTo: req.query.sDateTimeTo
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.deleteExemption = function(req, res) {
  var options = {
    path: 'action/flow/removeSheduleFlowExclude',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Flow_ServiceData: req.query.nID_Department,
//      nID_Department: req.query.nID_Department,
      nID: req.query.nID
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.getFlowSlots = function(req, res) {
  var options = {
    path: 'action/flow/getFlowSlots_ServiceData',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Department: req.query.nID_Department,
      bAll: req.query.bAll,
      nDays: req.query.nDays,
      sDateStart: req.query.sDateStart
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.buildFlowSlots = function(req, res) {
  var options = {
    path: 'action/flow/buildFlowSlots',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Department: req.query.nID_Department,
      sDateStart: req.query.sDateStart,
      sDateStop: req.query.sDateStop
    }
  };

  activiti.post(options, function(error, statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
};

exports.deleteFlowSlots = function(req, res) {
  var options = {
    path: 'action/flow/clearFlowSlots',
    query: {
      sID_BP: req.query.sID_BP,
      nID_Department: req.query.nID_Department,
      sDateStart: req.query.sDateStart,
      sDateStop: req.query.sDateStop,
      bWithTickets: req.query.bWithTickets
    }
  };

  activiti.del(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
     res.status(statusCode).json(result);
    }
  });
};

exports.getFlowSlotTickets = function(req, res) {
  //var user = JSON.parse(req.cookies.user);
  var user = JSON.parse(localStorage.getItem('user'));
  var query = {
    sLogin: user.id
  };
  if (req.query.bEmployeeUnassigned)
    query.bEmployeeUnassigned = req.query.bEmployeeUnassigned;
  if (req.query.sDate)
    query.sDate = req.query.sDate;
  var options = {
    path: 'action/flow/getFlowSlotTickets',
    query: query
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
      res.status(statusCode).json(result);
    }
  });
};

exports.getFlowSlotDepartments = function(req, res) {
  var options = {
    path: 'action/flow/getFlowSlots_Department',
    query: {
      sID_BP: req.query.sID_BP
    }
  };

  activiti.get(options, function(error, statusCode, result) {
    if (error) {
      res.send(error);
    } else {
      res.status(statusCode).json(result);
    }
  })
};
