'reinit'
'set display color black'
'c'

'sdfopen sst.mean.nc'

'set parea 1.0 8.0 2.0 6.0'
'set x 1'
'set y 1'
'set time jan1979 dec2013'
'set vrange 22.5 30.5'

'nino4 = aave(sst, lon=-160, lon=-150, lat=-10, lat=5)'
'nino3 = aave(sst, lon=-150, lon=-90, lat=-5, lat=5)'

mon = 3

* low pass filter
'define nino'mon' = ave(nino'mon', t - 9, t + 9)'

* high pass filter
'define nino'mon'=ave(nino'mon', t - 9, t + 9) + ave(nino'mon', time = jan1979, time = dec2000) '

'define nino'mon' = ((nino'mon'(t - 2) + 4 * nino'mon'(t - 1) + 6 * nino'mon'(t + 0) + 4 * nino'mon'(t + 1) + nino'mon'(t + 2))/16)'

'set cmark 0'
'set cthick 4'
'set ccolor 1'

'd smth9(nino'mon')'
'set cmark 0'
'set cthick 4'
'set ccolor 5'

'd smth9(smth9(smth9(nino'mon')))'

'set cmark 0'
'set cthick 4'
'set ccolor 6'


'd nino'mon
'draw title NINO'mon' SST ('3.'1C)'

'gxprint ENSO_sst_NINO'mon '.png'
