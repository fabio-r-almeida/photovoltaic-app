const Corrected_Energy = (ChartData_Energy,noct,alpha,pvstc) => {
  var total_produced = 0;
  var total_expected = 0;
  var calculated_monthly_data= {}
  var real_monthly_data= {}
  pvstc = pvstc*1000
  ChartData_Energy.forEach((value) => {
    var data = [];
    var real_data = [];
    value.data.outputs.daily_profile.forEach((value_month) => {

      var t_cell = value_month["T2m"] + ((noct-20)/800)*value_month["G(i)"];
      var pvmax = (pvstc*value_month["G(i)"])/1000
      var pv_mppt = pvmax*(1+alpha/100*(t_cell-25))
      data.push(pv_mppt)
      if(value_month['month']===1 || value_month['month']===3 || value_month['month']===5 ||value_month['month']===7 ||value_month['month']===8 ||value_month['month']===10 ||value_month['month']===12){
      total_expected = total_expected + pvmax*31
      total_produced = total_produced + pv_mppt*31
      }
      else if (value_month['month']===2){
      total_expected = total_expected + pvmax*28
      total_produced = total_produced + pv_mppt*28
      }
      else{
      total_expected = total_expected + pvmax*30
      total_produced = total_produced + pv_mppt*30
      }
      real_data.push(value_month["G(i)"]*pvstc/1000)
})


  if(value.data.outputs.daily_profile[23]['month']===1)
  calculated_monthly_data.month1 = data;
  if(value.data.outputs.daily_profile[23]['month']===2)
  calculated_monthly_data.month2 = data;
  if(value.data.outputs.daily_profile[23]['month']===3)
  calculated_monthly_data.month3 = data;
  if(value.data.outputs.daily_profile[23]['month']===4)
  calculated_monthly_data.month4 = data;
  if(value.data.outputs.daily_profile[23]['month']===5)
  calculated_monthly_data.month5 = data;
  if(value.data.outputs.daily_profile[23]['month']===6)
  calculated_monthly_data.month6 = data;
  if(value.data.outputs.daily_profile[23]['month']===7)
  calculated_monthly_data.month7 = data;
  if(value.data.outputs.daily_profile[23]['month']===8)
  calculated_monthly_data.month8 = data;
  if(value.data.outputs.daily_profile[23]['month']===9)
  calculated_monthly_data.month9 = data;
  if(value.data.outputs.daily_profile[23]['month']===10)
  calculated_monthly_data.month10 = data;
  if(value.data.outputs.daily_profile[23]['month']===11)
  calculated_monthly_data.month11 = data;
  if(value.data.outputs.daily_profile[23]['month']===12)
  calculated_monthly_data.month12 = data;

if(value.data.outputs.daily_profile[23]['month']===1)
real_monthly_data.month1 = real_data;
if(value.data.outputs.daily_profile[23]['month']===2)
real_monthly_data.month2 = real_data;
if(value.data.outputs.daily_profile[23]['month']===3)
real_monthly_data.month3 = real_data;
if(value.data.outputs.daily_profile[23]['month']===4)
real_monthly_data.month4 = real_data;
if(value.data.outputs.daily_profile[23]['month']===5)
real_monthly_data.month5 = real_data;
if(value.data.outputs.daily_profile[23]['month']===6)
real_monthly_data.month6 = real_data;
if(value.data.outputs.daily_profile[23]['month']===7)
real_monthly_data.month7 = real_data;
if(value.data.outputs.daily_profile[23]['month']===8)
real_monthly_data.month8 = real_data;
if(value.data.outputs.daily_profile[23]['month']===9)
real_monthly_data.month9 = real_data;
if(value.data.outputs.daily_profile[23]['month']===10)
real_monthly_data.month10 = real_data;
if(value.data.outputs.daily_profile[23]['month']===11)
real_monthly_data.month11 = real_data;
if(value.data.outputs.daily_profile[23]['month']===12)
real_monthly_data.month12 = real_data;

  
 })
  return [calculated_monthly_data, real_monthly_data, total_produced/1000,total_expected/1000];

};

export {
  Corrected_Energy
};