export function calculateLeadScore(lead: any, conversations: any[]) {
  let score = 0; const reasons: string[] = [];
  const text = conversations.map(c=>c.content.toLowerCase()).join(' ');
  if(text.includes('price')||text.includes('pricing')||text.includes('kitna')){ score+=25; reasons.push('Asked about pricing');}
  if(text.includes('book')||text.includes('demo')||text.includes('appointment')){ score+=30; reasons.push('Requested demo/booking');}
  if(conversations.length > 3){ score+=15; reasons.push('High engagement');}
  const last = conversations[conversations.length-1];
  if(last && (Date.now() - new Date(last.createdAt).getTime()) < 1000*60*30){ score+=20; reasons.push('Replied within 30 min');}
  if(text.includes('urgent')||text.includes('today')||text.includes('asap')){ score+=10; reasons.push('Urgency detected');}
  return { score: Math.min(100,score), reasons, temperature: score>80?'HOT':score>50?'WARM':'COLD', intent: score>75?'HIGH':score>40?'MEDIUM':'LOW', probability: Math.min(95,score) };
}

export function getNextBestAction(score: number, stage: string, lastContactHours: number){
  if(stage==='NEW') return {action:'REPLY', reason:'New lead needs immediate reply'};
  if(lastContactHours>48 && score>50) return {action:'FOLLOW_UP', reason:`No response for ${Math.floor(lastContactHours)}h`};
  if(score>85) return {action:'BOOK_APPOINTMENT', reason:'High buying intent - 91% score'};
  if(score>70) return {action:'ASK_QUALIFICATION_QUESTION', reason:'Qualified but needs more info'};
  return {action:'WAIT', reason:'Monitoring engagement'};
}
