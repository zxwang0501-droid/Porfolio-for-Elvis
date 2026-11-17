const list = document.querySelector('#project-list');
for (const project of window.portfolioProjects) {
  const card = document.createElement('article'); card.className = 'project';
  const n = document.createElement('span'); n.className = 'project-number'; n.textContent = project.number;
  const body = document.createElement('div'); const title = document.createElement('h3'); title.textContent = project.title;
  const desc = document.createElement('p'); desc.textContent = project.description;
  const tags = document.createElement('span'); tags.className = 'tags'; tags.textContent = project.tags.join(' / ');
  body.append(title, desc, tags);
  const side = document.createElement('div'); side.className = 'project-side';
  const status = document.createElement('span'); status.className = 'pill'; status.textContent = project.status;
  const link = document.createElement('a'); link.className = 'text-link'; link.href = project.url; link.textContent = project.linkLabel + ' ↗';
  side.append(status, link); card.append(n, body, side); list.append(card);
}
const count = window.portfolioProjects.length; document.querySelector('#project-count').textContent = String(count).padStart(2, '0') + (count === 1 ? ' PROJECT' : ' PROJECTS');
const results = {'0.5': [88.7,59.9], '0.4': [86.7,68.8], '0.38': [85.8,70.5], '0.386': [86.06090442365848,70.00572082379862]};
const select = document.querySelector('#threshold');
function showResult() {
  const [precision, recall] = results[select.value];
  for (const [key,value] of [['precision',precision],['recall',recall]]) {
    document.querySelector('#'+key).textContent = value.toFixed(1)+'%';
    document.querySelector('#'+key+'-bar').style.width = value+'%';
  }
  document.querySelector('#result-summary').textContent = `At this threshold, about ${precision.toFixed(0)}% of flagged transactions are fraud, and ${recall.toFixed(0)}% of fraudulent transactions are detected.`;
}
select.addEventListener('change',showResult); showResult();
const points = document.querySelector('#points');
for(let i=0;i<82;i++) {
  const x=18+(i*67%403), y=18+(i*i*31%330);
  const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
  dot.setAttribute('cx',x);dot.setAttribute('cy',y);dot.setAttribute('r',i%7===0?4:2.7);dot.setAttribute('fill',x+y>420?'#b85032':'#648266');dot.setAttribute('opacity','.65');points.append(dot);
}
