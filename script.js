const WHATSAPP='919845700129';
const PHONE='919845700129';
const EMAIL='elitecompanionsgbl@gmail.com';

// Derive profile-specific service keywords from that profile's own "about" text,
// so profile keyword metadata isn't the same generic list for every profile.
function deriveServiceKeywords(about){
  const a=(about||'').toLowerCase();
  const kws=[];
  if(a.includes('female to male')||a.includes('f2m')||a.includes('f to m'))kws.push('female to male massage');
  if(a.includes('body to body'))kws.push('body to body massage');
  if(a.includes('b2b'))kws.push('B2B massage');
  if(a.includes('erotic'))kws.push('erotic massage');
  if(a.includes('deep tissue'))kws.push('deep tissue massage');
  if(a.includes('full body'))kws.push('full body massage');
  if(a.includes('sensual'))kws.push('sensual massage');
  if(a.includes('therapeutic')||a.includes('relaxation'))kws.push('therapeutic massage');
  if(a.includes('spa'))kws.push('spa session');
  if(a.includes('body massage'))kws.push('body massage in Goa');
  return kws.length?kws:['body massage in Goa'];
}

// City -> areas map for SEO-driven area selection
const AREAS={
  'Goa':['Panaji','Calangute','Baga','Vagator','Anjuna','Candolim','Margao','Benaulim','Colva','Morjim'],
  'Bengaluru':['Indiranagar','Koramangala','Whitefield','HSR Layout','Jayanagar','Malleshwaram','MG Road','Brigade Road','Electronic City','Marathahalli',''],
  'Mumbai':['Bandra','Andheri','Juhu','Colaba','Worli','Powai','Lower Parel','Malad','Dadar','Goregaon'],
  'Chennai':['T. Nagar','Adyar','Anna Nagar','Velachery','Mylapore','Besant Nagar','OMR','Guindy','Nungambakkam','Thiruvanmiyur'],
  'Kolkata':['Park Street','Salt Lake','Kankurgachi','Ballygunge','New Town','Gariahat','Howrah','Behala','Dumdum','Rajarhat'],
  'Hyderabad':['Banjara Hills','Jubilee Hills','Gachibowli','HITEC City','Madhapur','Kukatpally','Secunderabad','Ameerpet','Begumpet','Kondapur'],
  'Pune':['Koregaon Park','Kothrud','Viman Nagar','Hinjewadi','Baner','Aundh','Hadapsar','Kalyani Nagar','Camp','Shivajinagar']
};

const profiles=[
{name:'Akansha',title:'Elegant Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:26,initial:'A',verified:true,img:'img/profiles/akansha.png',gallery:'img/galleries/akansha',pages:12,about:'Specialises in female to male massage and full body treatments in Panaji, Goa.',likes:['Dining','Travel','Music','Conversation']},
{name:'Rosey',title:'Warm Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:24,initial:'E',verified:true,img:'img/profiles/elif.png',gallery:'img/galleries/elif',pages:12,about:'A soothing blend of body to body massage and deep tissue therapy in Panaji, Goa.',likes:['Beach','Art','Cafés','Dancing']},
{name:'Ellya',title:'Sophisticated Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:27,initial:'E',verified:true,img:'img/profiles/ellya.png',gallery:'img/galleries/ellya',pages:12,about:'Professional F2M and therapeutic massage sessions in Panaji, Goa.',likes:['Luxury','Fashion','Travel','Fine dining']},
{name:'Chandana',title:'Vibrant Companion in Calangute, Goa',city:'Goa',area:'Calangute',goa:true,age:25,initial:'G',verified:true,img:'img/profiles/giya.png',gallery:'img/galleries/giya',pages:12,about:'Sensual body massage and B2B sessions across Calangute and Panaji, Goa.',likes:['Beach','Live music','Sunset drives','Local food','Photography','Adventure']},
{name:'Kirann',title:'Bubbly Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:23,initial:'K',verified:true,img:'img/profiles/kirann.png',gallery:'img/galleries/kirann',pages:12,about:'Female to male massage paired with deep relaxation techniques in Panaji, Goa.',likes:['Movies','Road trips','Food','Fitness']},
{name:'Sara',title:'Elegant Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:28,initial:'S',verified:true,img:'img/profiles/sara.png',gallery:'img/galleries/sara',pages:12,about:'Combines B2B massage with a female to male approach in Panaji, Goa.',likes:['Theatre','Culture','Wine','Reading']},
{name:'Selena',title:'Charming Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:25,initial:'S',verified:true,img:'img/profiles/selena.png',gallery:'img/galleries/selena',pages:12,about:'Body to body massage and premium spa sessions in Panaji, Goa.',likes:['Beach clubs','Shopping','Style','Parties']},
{name:'Chandini',title:'Playful Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:24,initial:'R',verified:true,img:'img/profiles/ria.png',gallery:'img/galleries/ria',pages:4,about:'Offers body massage alongside female to male sessions in Panaji, Goa.',likes:['Cafés','Music','Shopping','Travel']},
{name:'Nisha',title:'Graceful Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:26,initial:'N',verified:true,img:'img/profiles/nisha.png',gallery:'img/galleries/nisha',pages:4,about:'Calming F2M massage and relaxation therapy in Panaji, Goa.',likes:['Art','Fine dining','Reading','Wine']},
{name:'Priya',title:'Enchanting Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:25,initial:'P',verified:true,img:'img/galleries/priya/1.png',gallery:'img/galleries/priya',pages:4,about:'Erotic massage blended with body to body sessions in Panaji, Goa.',likes:['Dancing','Rooftops','Dining','Adventure']},
{name:'Zara',title:'Radiant Companion in Panaji, Goa',city:'Goa',area:'Panaji',goa:true,age:27,initial:'Z',verified:true,img:'img/profiles/zara.png',gallery:'img/galleries/zara',pages:4,about:'Sensual erotic massage and B2B techniques in Panaji, Goa.',likes:['Luxury','Travel','Fashion','Conversation']},

// Bengaluru profiles
{name:'Aarya',title:'Stylish Companion in Indiranagar, Bengaluru',city:'Bengaluru',area:'Indiranagar',age:27,initial:'A',verified:true,img:'img/profiles/sushmita.png',gallery:'img/galleries/aarya',pages:12,about:'Body massage and body to body sessions in Indiranagar, Bengaluru.',likes:['Dining','Rooftops','Art','Travel']},

{name:'Nandini',title:'Charming Companion in Koramangala, Bengaluru',city:'Bengaluru',area:'Koramangala',age:25,initial:'N',verified:true,img:'img/profiles/akansha.png',gallery:'img/galleries/nandini',pages:12,about:'Female to male massage and full body treatments in Koramangala, Bengaluru.',likes:['Movies','Food','Live music']},

{name:'Rhea',title:'Elegant Companion in Whitefield, Bengaluru',city:'Bengaluru',area:'Whitefield',age:29,initial:'R',verified:true,img:'img/profiles/elif.png',gallery:'img/galleries/rhea',pages:12,about:'Body to body massage and B2B spa sessions in Whitefield, Bengaluru.',likes:['Travel','Fine dining','Theatre']},

{name:'Meera',title:'Playful Companion in HSR Layout, Bengaluru',city:'Bengaluru',area:'HSR Layout',age:24,initial:'M',verified:true,img:'img/profiles/ellya.png',gallery:'img/galleries/meera',pages:12,about:'Relaxing F2M massage and deep tissue therapy in HSR Layout, Bengaluru.',likes:['Cafés','Shopping','Music']},

{name:'Tanya',title:'Sophisticated Companion in Jayanagar, Bengaluru',city:'Bengaluru',area:'Jayanagar',age:28,initial:'T',verified:true,img:'img/profiles/giya.png',gallery:'img/galleries/tanya',pages:12,about:'Professional body to body and female to male massage in Jayanagar, Bengaluru.',likes:['Culture','Reading','Dining']},

{name:'Priyanka',title:'Radiant Companion in MG Road, Bengaluru',city:'Bengaluru',area:'MG Road',age:26,initial:'P',verified:true,img:'img/profiles/kirann.png',gallery:'img/galleries/priyanka',pages:12,about:'B2B massage and erotic body to body sessions in MG Road, Bengaluru.',likes:['Nightlife','Cocktails','Conversation']},

];

function renderProfiles(list=profiles){
 const box=document.getElementById('profiles');
 if(!box)return;
 const city=document.getElementById('cityFilter').value;
 const area=document.getElementById('areaFilter')?document.getElementById('areaFilter').value:'';
 let filtered=list.filter(p=>!city||p.city===city);
 if(area)filtered=filtered.filter(p=>(p.area||'').toLowerCase()===area.toLowerCase());
 box.innerHTML=filtered.map(p=>`<article class="profile"><a class="avatar-link" href="profile.html?name=${encodeURIComponent(p.name)}" title="View profile & photos"><div class="avatar"><img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.src='img/profiles/placeholder.svg'"><span class="page-count">${p.pages} photos</span></div></a><div class="profile-info"><div class="name-row"><h3><a href="profile.html?name=${encodeURIComponent(p.name)}">${p.name}</a></h3>${p.verified?'<span class="verified">✓ Verified</span>':''}</div><div class="muted">${p.city}${p.area?' · '+p.area:''} · ${p.age} yrs</div><p class="about">${p.about}</p><div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div><div class="actions"><a class="btn green" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi '+p.name+', I found your profile on Elite Companions.')}">💬 WhatsApp</a><a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call</a><a class="btn green mail" href="mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry for '+p.name)}&body=${encodeURIComponent('Hi, I found '+p.name+' on Elite Companions.')}">✉️ Email</a></div></div></article>`).join('');
}
function searchProfiles(){
 const q=document.getElementById('searchInput').value.toLowerCase().trim();
 renderProfiles(profiles.filter(p=>(p.name+' '+p.city+' '+(p.area||'')+' '+p.likes.join(' ')).toLowerCase().includes(q)));
 document.getElementById('discover').scrollIntoView({behavior:'smooth'});
}
function setCity(city){document.getElementById('cityFilter').value=city;updateAreaFilter();renderProfiles();document.getElementById('discover').scrollIntoView({behavior:'smooth'});}

function updateAreaFilter(){
 const sel=document.getElementById('areaFilter');
 if(!sel)return;
 const city=document.getElementById('cityFilter').value;
 const areas=AREAS[city]||[];
 sel.innerHTML='<option value="">All areas</option>'+areas.map(a=>`<option value="${a}">${a}</option>`).join('');
 sel.disabled=!areas.length;
 renderProfiles();
}

// Explore-by-area board
function exploreCity(city,btn){
 const tabs=document.querySelectorAll('.city-tabs button');
 tabs.forEach(t=>t.classList.remove('active'));
 if(btn)btn.classList.add('active');
 const areas=AREAS[city]||[];
 const board=document.getElementById('areaBoard');
 if(!board)return;
 board.innerHTML=areas.map(a=>`<button class="area-chip" onclick="setArea('${city}','${a}')">${a}</button>`).join('')||'<p>No areas listed for this city yet.</p>';
}
function setArea(city,area){
 const cf=document.getElementById('cityFilter');if(cf)cf.value=city;
 const af=document.getElementById('areaFilter');
 if(af){
   af.innerHTML=`<option value="">All areas</option>${(AREAS[city]||[]).map(a=>`<option value="${a}">${a}</option>`).join('')}`;
   af.value=area;af.disabled=false;
 }
 renderProfiles();
 document.getElementById('discover').scrollIntoView({behavior:'smooth'});
}

function openModal(){const m=document.getElementById('modal');if(m)m.style.display='flex'}
function closeModal(){const m=document.getElementById('modal');if(m)m.style.display='none'}
var FORM_EMAIL='elitecompanionsgbl@gmail.com';
function submitForm(e){
 e.preventDefault();
 const name=(document.getElementById('fName')||{}).value||'';
 const from=(document.getElementById('fEmail')||{}).value||'';
 const city=(document.getElementById('fCity')||{}).value||'';
 const desc=(document.getElementById('fDesc')||{}).value||'';
 const subject='New profile listing request';
 const body='New profile listing request via Serenespa Elitecompanion:\n\nName: '+name+'\nContact email: '+from+'\nCity: '+city+'\nDescription: '+desc;
 // Open user's email client with a draft to the owner
 location.href='mailto:'+FORM_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 alert('Thanks! Your email app will open to send your profile request to us for review.');
 // also show an on-page confirmation banner so owner notification is obvious
 closeModal();
 const note=document.createElement('div');
 note.id='profile-sent-note';
 note.innerText='Email draft opened to send profile listing to '+FORM_EMAIL+'. Please complete sending from your email app.';
 note.style.position='fixed';
 note.style.bottom='20px';
 note.style.left='50%';
 note.style.transform='translateX(-50%)';
 note.style.background='#1eb05a';
 note.style.color='#fff';
 note.style.padding='12px 18px';
 note.style.borderRadius='8px';
 note.style.boxShadow='0 8px 24px rgba(0,0,0,0.2)';
 note.style.zIndex=9999;
 document.body.appendChild(note);
 setTimeout(()=>{
   if(note&&note.parentNode)note.parentNode.removeChild(note);
 },8000);
 if(e.target&&e.target.reset)e.target.reset();
}

// Profile detail page rendering
function renderProfilePage(){
 const main=document.getElementById('profileMain');
 if(!main){ // not on profile page; handle index page
   if(document.getElementById('profiles'))renderProfiles();
   return;
 }
 const params=new URLSearchParams(location.search);
 const name=params.get('name');
 const p=profiles.find(x=>x.name.toLowerCase()=== (name||'').toLowerCase());
 if(!p){main.innerHTML='<h2>Profile not found</h2><a class="back" href="index.html#discover">← Back to profiles</a>';return;}
document.title=`${p.name} | ${p.city} | Serene Spa`;
  // Update meta description dynamically for profile pages (if <meta name="description"> exists)
  var metaDesc = document.querySelector('meta[name="description"]');
  if(metaDesc) metaDesc.setAttribute('content', `${p.name} | ${p.city}${p.area ? ' · ' + p.area : ''} | Serene Spa profile details and location information.`);
  // Per-profile keywords, derived from that profile's own name/city/area/service info
  var metaKw = document.querySelector('meta[name="keywords"]');
  var kwContent = [p.name, p.city, p.area].filter(Boolean).concat(deriveServiceKeywords(p.about)).join(', ');
  if(metaKw) metaKw.setAttribute('content', kwContent); else { metaKw=document.createElement('meta'); metaKw.setAttribute('name','keywords'); metaKw.setAttribute('content', kwContent); document.getElementsByTagName('head')[0].appendChild(metaKw); }
  // Ensure a canonical link tag exists and points to this profile URL (including query) so each profile has a distinct canonical
  var linkCanon = document.querySelector('link[rel="canonical"]');
  var canonicalHref = 'https://serenespagoa.com/profile.html?name=' + encodeURIComponent(p.name);
  if(linkCanon) linkCanon.setAttribute('href', canonicalHref); else { linkCanon = document.createElement('link'); linkCanon.setAttribute('rel','canonical'); linkCanon.setAttribute('href', canonicalHref); document.getElementsByTagName('head')[0].appendChild(linkCanon); }
const wa=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi '+p.name+', I found your profile on Elite Companions.')}`;
 main.innerHTML=`<div class="profile-hero">
   <div class="ph-img"><img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.src='img/profiles/placeholder.svg'"></div>
   <div class="ph-info">
     <div class="name-row"><h1>${p.name}</h1>${p.verified?'<span class="verified">✓ Verified</span>':''}</div>
     <div class="muted big">${p.city}${p.area?' · '+p.area:''} · ${p.age} yrs</div>
     <h2 class="ph-title">${p.title}</h2>
     <p class="about">${p.about}</p>
     <div class="tags">${p.likes.map(l=>`<span>${l}</span>`).join('')}</div>
     <div class="actions">
       <a class="btn green" target="_blank" rel="noopener" href="${wa}">💬 WhatsApp</a>
       <a class="btn green alt" target="_blank" rel="noopener" href="tel:+${PHONE}">📞 Call now</a>
       <a class="btn green mail" href="mailto:${EMAIL}?subject=${encodeURIComponent('Inquiry for '+p.name)}&body=${encodeURIComponent('Hi, I found '+p.name+' on Elite Companions.')}">✉️ Email</a>
     </div>
   </div>
 </div>`;
 // Gallery
 const box=document.getElementById('profileGallery');
 if(!box)return;
 let html='';
 for(let i=1;i<=p.pages;i++){
   html+=`<figure class="gitem"><img src="${p.gallery}/${i}.png" alt="${p.name} — ${p.title} — photo ${i}" loading="lazy" onerror="this.onerror=null;this.src='img/profiles/placeholder.svg'"><figcaption>Photo ${i}</figcaption></figure>`;
 }
 box.innerHTML=html;
}

// Spotlight carousel
function initSpotlight(){
  var track=document.getElementById('spotTrack');
  if(!track)return;
  var cards=track.children,index=0;
  var prev=document.getElementById('spotPrev'),next=document.getElementById('spotNext');
  function go(i){
    index=(i+cards.length)%cards.length;
    track.style.transform='translateX(-'+index*100+'%)';
  }
  if(prev)prev.onclick=function(ev){ev.preventDefault();go(index-1)};
  if(next)next.onclick=function(ev){ev.preventDefault();go(index+1)};
  setInterval(function(){go(index+1)},6000);
}

var enterBtn=document.getElementById('enterBtn'),ageGate=document.getElementById('ageGate');
if(enterBtn)enterBtn.onclick=function(){ageGate.classList.add('hidden');sessionStorage.setItem('ageConfirmed','1');return false;};
if(document.getElementById('profileMain')){
  renderProfilePage();
}else{
  if(sessionStorage.getItem('ageConfirmed'))ageGate.classList.add('hidden');
  renderProfiles();
  if(document.getElementById('areaFilter'))updateAreaFilter();
const firstTab=document.querySelector('.city-tabs button');
  if(firstTab)exploreCity('Goa',firstTab);
  initSpotlight();
}