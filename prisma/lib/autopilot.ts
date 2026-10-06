export type AutopilotMode = 'OFF' | 'ASSISTED' | 'AUTONOMOUS';
export function canAutoExecute(action: string, mode: AutopilotMode, permissions: any){
  if(mode==='OFF') return {allowed:false, needsApproval:true};
  if(mode==='ASSISTED') return {allowed:false, needsApproval:true};
  if(mode==='AUTONOMOUS'){
    const autoActions = ['REPLY','FOLLOW_UP','SCORE_LEAD','UPDATE_STAGE','CREATE_TASK'];
    if(autoActions.includes(action)) return {allowed:true, needsApproval:false};
    if(action==='BOOK_APPOINTMENT' && permissions?.canBook) return {allowed:true, needsApproval:false};
    return {allowed:false, needsApproval:true};
  }
  return {allowed:false, needsApproval:true};
}
export const DEFAULT_PERMISSIONS = { canReply:true, canQualify:true, canFollowUp:true, canUpdateStage:true, canBook:false, canCall:false, maxFollowUps:3, requiresApprovalForDiscount:true };
