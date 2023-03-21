?
'sdfopen ndviavhrr19812001.nc'
'sdfopen precip.mon.mean.1x1.nc'

'set gxout fwrite'
'set fwrite ndvi_prcp_1982-2001_mon.gds'
'set x 1 360'
'set y 1 180'

iy=1981; 
while(iy<=2001)

im=1; 
while(im<=12)

'set time 'mon.im''iy 
'd data'

im=im+1; 
endwhile

im=1; 
while(im<=12)
'd precip.2(z=1,time='mon.im''iy')'

im=im+1; 
endwhile

iy=iy+1; 
endwhile