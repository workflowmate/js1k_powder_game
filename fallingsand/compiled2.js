f=0,g=4,h=new Uint32Array(54E4),k=[1225130217,524475,131195,406879331,224,132211,1082290409,1090654432,939527650,262889],l=[];l[1225130221]=8956603;l[262893]=7838139;l[524479]=16720418;l[131199]=3355511;l[406879335]=255;l[228]=8947848;l[132215]=26112;l[939527654]=43520;l[1082290413]=6728294;l[1090654436]=34969;var m=new ArrayBuffer(216E4),n=new Uint32Array(m),p=new Uint8ClampedArray(m);for(i=600;i--;)h[900*i]=192;var q=0,t=my=-1;onmousedown=r=>++q;onmouseup=r=>--q;
onmousemove=r=>{return(t=r.offsetX)&&(my=r.offsetY)};onkeydown=r=>++f;
e=r=>{for(y=9;q&&-9<--y;)for(x=9;-9<--x;)81>x*x+y*y&&(h[t+x+900*(my+y)]=k[f%7]^g^4);n.fill(4278190080);for(b=54E4;b--;)a=h[b],a&32&&4&a^g&&(n[b]|=l[a|4],a&2048&&.1>Math.random()&&(a=0),a&4096&&h[b-900]&4063232&a>>5&&(h[b-900]=k[a>>27]^g),a&16384&&h[b+900]&4063232&a>>5&&(h[b+900]=k[a>>27]^g),a&8192&&(h[b+1]&4063232&a>>5&&(h[b+1]=k[a>>27]^g),h[b-1]&4063232&a>>5&&(h[b-1]=k[a>>27]^g)),d=b+900*(!!(a&8)-!!(a&1024))*(!(a&512)||.5<Math.random())+(Math.random()<1.3*(a&3))*(.5<Math.random()?1:-1),54E4>
d&&0<d&&(h[d]&192)<(a&192)||a&16&&(h[d=d%900+900*(b/900|0)]&192)<(a&192)||(d=b),h[d]&4063232&a>>5&&(a=k[a>>27]^g),h[b]=a&256?k[a>>27]^g:h[d],h[d]=a^4);imgData=new ImageData(p,900,600);c.putImageData(imgData,0,0);for(i=7;i--;)c.fillStyle="rgb("+(l[k[i]|4]&255)+","+((l[k[i]|4]&65280)>>8)+","+((l[k[i]|4]&16711680)>>16)+")",c.fillRect(16*i+9,i==f%7?16:9,9,9);g^=4;requestAnimationFrame(e)};e();
