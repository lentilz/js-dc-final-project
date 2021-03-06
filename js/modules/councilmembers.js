// Pull in council member data from local file instead of running two calls to the LIMS api which takes a couple seconds per request.
// JSON data from: http://lims.dccouncil.us/api/v1/masters/Members/0
var data = {
  members: [
    {
      "Name":"Charles Allen",
      "FirstName":"Charles",
      "LastName":"Allen",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":8,
      "Id":254
    },
    {
      "Name":"Anita Bonds",
      "FirstName":"Anita ",
      "LastName":"Bonds",
      "MiddleName":null,
      "Gender":"F",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":12,
      "Id":258
    },
    {
      "Name":"Mary Cheh",
      "FirstName":"Mary",
      "LastName":"Cheh",
      "MiddleName":null,
      "Gender":"F",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":5,
      "Id":251
    },
    {
      "Name":"Jack Evans",
      "FirstName":"Jack",
      "LastName":"Evans",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":4,
      "Id":250
    },
    {
      "Name":"Vincent Gray",
      "FirstName":"Vincent",
      "LastName":"Gray",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":9,
      "Id":255
    },
    {
      "Name":"David Grosso",
      "FirstName":"David",
      "LastName":"Grosso",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":13,
      "Id":259
    },
    {
      "Name":"Kenyan McDuffie",
      "FirstName":"Kenyan",
      "LastName":"McDuffie",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":7,
      "Id":253
    },
    {
      "Name":"Phil Mendelson",
      "FirstName":"Phil",
      "LastName":"Mendelson",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Chairman",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":2,
      "Id":248
    },
    {
      "Name":"Brianne Nadeau",
      "FirstName":"Brianne",
      "LastName":"Nadeau",
      "MiddleName":null,
      "Gender":"F",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":3,
      "Id":249
    },
    {
      "Name":"Robert White",
      "FirstName":"Robert",
      "LastName":"R. White",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":14,
      "Id":260
    },
    {
      "Name":"Elissa Silverman",
      "FirstName":"Elissa",
      "LastName":"Silverman",
      "MiddleName":null,
      "Gender":"F",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":11,
      "Id":257
    },
    {
      "Name":"Trayon White",
      "FirstName":"Trayon",
      "LastName":"T. White",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":10,
      "Id":256
    },
    {
      "Name":"Brandon Todd",
      "FirstName":"Brandon",
      "LastName":"Todd",
      "MiddleName":null,
      "Gender":"M",
      "MemberTitle":"Councilmember",
      "CouncilPeriod":22,
      "StartDate":"2017/01/02 00:00:00",
      "EndDate":"0001/01/01 00:00:00",
      "DisplayOrder":6,
      "Id":252
    }
  ]
}
// console.log( data.members.length );

// Populate Select dropdown
var dropdown = document.querySelector('.js-select'),
    option = document.createElement('option');

for (var i = 0; i < data.members.length; i++) {
  var memOpt = option.cloneNode(true);
  // console.log( data.members[i].Name );
  memOpt.setAttribute("value", data.members[i].Id );
  memOpt.setAttribute("data-title", data.members[i].MemberTitle);
  memOpt.innerHTML = data.members[i].Name;

  dropdown.appendChild( memOpt );
}
