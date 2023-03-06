'reinit'
'set display color white'
'c'

alev=850

'sdfopen uwnd.mon.1981-2010.ltm.nc'
'sdfopen vwnd.mon.1981-2010.ltm.nc'
'sdfopen precip.mon.ltm.1981-2010.nc'


im=4
while (im <= 9)

* 단순 그래프 표시 위치 선정
    if(im=4)
        'set parea 0.5 4.0 7.5 10'
    endif
    if(im=5)
        'set parea 0.5 4.0 4.5 7.0'
    endif
    if(im=6)
        'set parea 0.5 4.0 1.5 4.0'
    endif
    if(im=7)
        'set parea 4.5 8.0 7.5 10.0'
    endif
    if(im=8)
        'set parea 4.5 8.0 4.5 7.0'
    endif
    if(im=9)
        'set parea 4.5 8.0 1.5 4.0'
    endif

********precipitation start********
* 지도 투영법 결정 : plot이 꽉 차게
    'set mproj scaled'
* 지도 grid off
    'set grid off'
*지도 해상도 : middle resolution
    'set mpdset mres'
* 지도 색깔:11 / 선종류:1 / 두께:3
    'set map 11 1 3'
*x, y 축 간격 설정
    'set ylint 5'
    'set xlint 10'
    
* 시공간 위치 선정
    'set lon -135 -85'
    'set lat 20 55'
    'set lev 'alev
    'set t 'im

* 음영처리
'set gxout shaded'

* 특정 값만 색칠
'set clevs 1.5 2.5 3.5 5'
* 칠하기로한 특정 값의 색깔 지정
'set ccols 0 7 12 8 2'

* 3번째 파일의 precip 데이터를 월별, z=1에 대해 출력
'd precip.3(z=1, t = 'im')'

********precipitation end********

********wind vector start********
* 그래프 벡터 화살표로 표시
'set gxout vector'
* 화살표 색상:1
'set ccolor 1'
* 화살표 scale : 화살표 크기
'set arrscl 0.3 10'
* 화살표 머리 크기
'set arrowhead -0.25'
* vector이기 때문에 x, y 값 2개 필요
'd uwnd.1;vwnd.2'

********wind vector end********

********title start********
* 문자열 설정 색상:4 / 위치:bc / 두께:6 / 기울기: 0
'set string 4 bc 6 0'
* 문자열 크기
'set strsiz 0.15'

* 월별 그래프 제목 달기
    if(im=4)
        'draw string 2.0 10.1 April'
    endif
    if(im=5)
        'draw string 2.0 7.1 May'
    endif
    if(im=6)
        'draw string 2.0 4.1 June'
    endif
    if(im=7)
        'draw string 6.0 10.1 July'
    endif
    if(im=8)
        'draw string 6.0 7.1 August'
    endif
    if(im=9)
        'draw string 6.0 4.1 September'
    endif

    im = im + 1
endwhile

* 최상단 제목 달기
'set string 1 1bc 6 0'
'set strsiz 0.16 0.18'
'draw string 4.2 10.6 'alev' mb'

* 이미지로 저장!
'printim NorthAmerican_Monsoon.png'
