'reinit'
'sdfopen uwnd.mon.1981-2010.ltm.nc'
'sdfopen vwnd.mon.1981-2010.ltm.nc'

'set background 1'
'c'
    'set lon 20 90'
    'set lat -10 35'
    'set t 7'
    'set z 2'

    'set mpdraw on'
    'set poli on'
    'set ccolor 4'
    'set gxout vector'    
    
    'd uwnd.1; vwnd.2'
    'draw title July 850mb Vector Wind(m/s)\Climatology 1981-2010'

    'printim July_850mb_Vector_Wind.png'
