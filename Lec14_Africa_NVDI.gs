'reinit'
'run color.gs'
'set display color white'
'c'
'sdfopen ndviavhrrclim.nc'

i = 1
while (i <= 4)

j = 1
while (j <= 3)

'set lat -35 40'
'set lon -20 50'
'set t 'j + ((i - 1) * 3)
'set gxout shaded'
'set map 1 3 2'

'set xlint 20'
'set ylint 20'

'set parea  'j + (1.7 * (j - 1))' 'j + (1.7 * j)' 'i + (1.5 * (i - 1))' 'i + (1.5 * i)

* 'color -2 2 -kind indianred->white->forestgreen'

* 'd (data-ave(data, t=1, t=12))*10'

'color -2 2 -kind chocolate->white->limegreen'

if(j + ((i - 1) * 3) = 1)
    'd (data(t=1)-data(t=12))*10'
else
    'd (data-data(t-1))*10'
endif


'draw title 'j + ((i - 1) * 3)


j = j + 1
endwhile

i = i + 1
endwhile

'printim Africa_NDVI.png'

