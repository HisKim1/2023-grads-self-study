'reinit'
'set display color white'
'c'

alev=850

'sdfopen uwnd.mon.1981-2010.ltm.nc'
'sdfopen vwnd.mon.1981-2010.ltm.nc'
'sdfopen precip.mon.ltm.1981-2010.nc'


im=4
while (im <= 9)

* �ܼ� �׷��� ǥ�� ��ġ ����
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
* ���� ������ ���� : plot�� �� ����
    'set mproj scaled'
* ���� grid off
    'set grid off'
*���� �ػ� : middle resolution
    'set mpdset mres'
* ���� ����:11 / ������:1 / �β�:3
    'set map 11 1 3'
*x, y �� ���� ����
    'set ylint 5'
    'set xlint 10'
    
* �ð��� ��ġ ����
    'set lon -135 -85'
    'set lat 20 55'
    'set lev 'alev
    'set t 'im

* ����ó��
'set gxout shaded'

* Ư�� ���� ��ĥ
'set clevs 1.5 2.5 3.5 5'
* ĥ�ϱ���� Ư�� ���� ���� ����
'set ccols 0 7 12 8 2'

* 3��° ������ precip �����͸� ����, z=1�� ���� ���
'd precip.3(z=1, t = 'im')'

********precipitation end********

********wind vector start********
* �׷��� ���� ȭ��ǥ�� ǥ��
'set gxout vector'
* ȭ��ǥ ����:1
'set ccolor 1'
* ȭ��ǥ scale : ȭ��ǥ ũ��
'set arrscl 0.3 10'
* ȭ��ǥ �Ӹ� ũ��
'set arrowhead -0.25'
* vector�̱� ������ x, y �� 2�� �ʿ�
'd uwnd.1;vwnd.2'

********wind vector end********

********title start********
* ���ڿ� ���� ����:4 / ��ġ:bc / �β�:6 / ����: 0
'set string 4 bc 6 0'
* ���ڿ� ũ��
'set strsiz 0.15'

* ���� �׷��� ���� �ޱ�
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

* �ֻ�� ���� �ޱ�
'set string 1 1bc 6 0'
'set strsiz 0.16 0.18'
'draw string 4.2 10.6 'alev' mb'

* �̹����� ����!
'printim NorthAmerican_Monsoon.png'
