import{r as o}from"./VChip-BAScr-gb.js";const _=(e,r,t,d,a,i)=>o.get(`/order/query?
num=${e}&per=${r}
&one_location_id=${t}
&two_location_id=${d}
&final_location_id=${a}
&damage_type_id=${i}`),l=e=>o.delete(`/order/delete/${e}`);export{l as d,_ as q};
