(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),s=(a(18),a(6)),o=a(1),m=a(2),i=a(4),u=a(3),d=a(5),f=function(e){return r.a.createElement("header",null,r.a.createElement("h1",{className:"text-center"},e.title))},p=a(11),g=a.n(p),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).petNameRef=r.a.createRef(),a.ownerNameRef=r.a.createRef(),a.dateRef=r.a.createRef(),a.hourRef=r.a.createRef(),a.symptomRef=r.a.createRef(),a.state={error:!1},a.createNewMeeting=function(e){e.preventDefault();var t=a.petNameRef.current.value,n=a.ownerNameRef.current.value,r=a.dateRef.current.value,c=a.hourRef.current.value,l=a.symptomRef.current.value;if(""===t||""===n||""===r||""===c||""===l)a.setState({error:!0});else{var s={id:g()(),pet:t,owner:n,date:r,hour:c,symptom:l};a.props.createMeeting(s),e.currentTarget.reset(),a.setState({error:!1})}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-center mb-5"},"Add Meeting"),r.a.createElement("form",{onSubmit:this.createNewMeeting},r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Pet"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("input",{ref:this.petNameRef,type:"text",className:"form-control",placeholder:"name"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Owner"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("input",{ref:this.ownerNameRef,type:"text",className:"form-control",placeholder:"name"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Date"),r.a.createElement("div",{className:"col-sm-8 col-lg-4  mb-4 mb-lg-0"},r.a.createElement("input",{ref:this.dateRef,type:"date",className:"form-control"})),r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Hour"),r.a.createElement("div",{className:"col-sm-8 col-lg-4"},r.a.createElement("input",{ref:this.hourRef,type:"time",className:"form-control"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-4 col-lg-2 col-form-label"},"Case"),r.a.createElement("div",{className:"col-sm-8 col-lg-10"},r.a.createElement("textarea",{ref:this.symptomRef,className:"form-control",placeholder:"Symptomatology"}))),r.a.createElement("div",{className:"form-group row justify-content-end"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{type:"submit",className:"btn btn-success w-100"},"Add")))),e?r.a.createElement("div",{className:"alert alert-danger text-center"},"Insufficient information"):""))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).deleteMeeting=function(){a.props.deleteMeeting(a.props.info.id)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.info,t=e.date,a=e.hour,n=e.owner,c=e.pet,l=e.symptom;return r.a.createElement("div",{className:"media mt-3"},r.a.createElement("div",{className:"media-body"},r.a.createElement("h3",{className:"mt-0"},c),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Owner : "),n),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Date : "),t),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Hour : "),a),r.a.createElement("p",{className:"card-text"},r.a.createElement("b",null,"Sympthoms : ")),r.a.createElement("p",{className:"card-text"},l),r.a.createElement("button",{onClick:this.deleteMeeting,className:"btn btn-danger"},"Delete \xd7")))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.meetings,a=0===Object.keys(t).length?"There isn't meetings":"Meetings Desktop";return r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title text-center"},a),r.a.createElement("div",{className:"meeting-list"},Object.keys(this.props.meetings).map(function(t){return r.a.createElement(E,{key:t,info:e.props.meetings[t],deleteMeeting:e.props.deleteMeeting})}))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={meetings:[]},a.createMeeting=function(e){var t=[].concat(Object(s.a)(a.state.meetings),[e]);console.log(t),a.setState({meetings:t})},a.deleteMeeting=function(e){var t=Object(s.a)(a.state.meetings).filter(function(t){return t.id!==e});a.setState({meetings:t})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("meetings");e&&this.setState({meetings:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("meetings",JSON.stringify(this.state.meetings))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(f,{title:"Puppy Health Clinic Patients"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(h,{createMeeting:this.createMeeting})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(b,{meetings:this.state.meetings,deleteMeeting:this.deleteMeeting}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.300666c1.chunk.js.map