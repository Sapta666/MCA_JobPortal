create or replace view vw_admin_hlp_tkt 
as
    select h.hlp_tkt_id,t.topic,h.message,h.user_id,u.f_name,u.l_name,u.user_type
    from hlp_tkt_details h
    left join HLP_TKT_TOPICS t 
    on t.topic_id = h.topic_id
    left join user_info u on u.user_id = h.user_id;
    

select * from vw_admin_hlp_tkt;

commit;