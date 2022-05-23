
import { ma } from 'moving-averages'

const yearly_production_ma = (data,noct, temp_coefficient, installed_power,losses) => {
    var new_data = []
    var counter =0;
    var sum = 0;
    var real_output = 0;
    var expected_output = 0;
    data.forEach((value_1) => {
      value_1.data.outputs.hourly.forEach((value) => {

        var t_cell = Object.values(value)[3] + ((noct-20)/800)*Object.values(value)[1];    
        var pvmax = (installed_power*Object.values(value)[1])/1000
        var pv_mppt = pvmax*(1+temp_coefficient/100*(t_cell-25))
       

        sum = sum + pv_mppt*(1-losses/100)
        real_output = real_output + pv_mppt*(1-losses/100)
        expected_output = expected_output + pvmax*(1-losses/100)
      
        
        if(counter===24){
            new_data.push(sum)
            sum=0;
            counter=0;
        }  
        counter++;
  })
})

var first_month=[];
var moving_average = ma(new_data,30)
    for(var i = new_data.length-31; i<new_data.length;i++){
      first_month.push(Object.values(ma(new_data,20))[i])
  }
  Array.prototype.splice.apply(moving_average, [0, first_month.length].concat(first_month));
  return [moving_average,real_output,expected_output]
  
  };

  
  
  export {
    yearly_production_ma
  };