'reinit'
'set display color white'
'c'

im = 1;
while(im<=7)
    'sdfopen uwnd.mon.1981-2010.ltm.nc'
    'sdfopen vwnd.mon.1981-2010.ltm.nc'
    'sdfopen omega.mon.1981-2010.ltm.nc'

    'set mproj scaled'

    'set x 1'
    'set lat -90 90'
    'set lev 1000 100'
    'set t 'im

    'set zlog on'
    
    'set gxout contour'
    'set ylab off'
    'set ccolor 4'
    'set cint 5'
    'set cmin 20'
    'set clopts -1 1 0.07'
    'set clab forced'
  


    
    if(im=4)
'set parea 0.8 8 4 6';
endif

    if(im=7)
'set parea 0.8 8 1 3';
endif
    if(im<=1)
'set parea 0.8 8 7 9';
endif

'd ave(uwnd.1,x=1,x=144)'
    if(im=1)
'draw title January 3-Cell';endif

    'set gxout vector'
    'set ylint 150'
    'set ylopts 1 2 0.1'
    'set ylpos 0 1'
    'set ccolor 1'
    'set arrscl 0.5 5'
    'set arrowhead -0.25'


    'd ave(vwnd.2, x=1, x=144); -ave(omega.3, x=1, x=144)*1e2'
    if(im=4)
'draw title April 3-Cell';
endif

    if(im=7)
 'draw title July 3-Cell';
endif

'printim 'im'.png';

'close 3'; 'close 2'; 'close 1';
im=im+3;endwhile
