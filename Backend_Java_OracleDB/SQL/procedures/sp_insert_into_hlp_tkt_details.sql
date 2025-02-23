-- for inserting data into table hlp tkt details
create or replace procedure sp_insert_into_hlp_tkt_details(
    p_HLP_TKT_ID         out hlp_tkt_details.hlp_tkt_id%type,
    p_MESSAGE            in hlp_tkt_details.message%type,
    p_TOPIC_ID           in hlp_tkt_details.topic_id%type,
    p_USER_ID            in hlp_tkt_details.user_id%type,
    p_RPLY_ADMIN_ID      in hlp_tkt_details.rply_admin_id%type,
    p_RPLY_MESSAGE       in hlp_tkt_details.rply_message%type
)
is
    gen_hlp_tkt_details_id hlp_tkt_details.hlp_tkt_id%type;    
    hlp_tkt_topic hlp_tkt_topics.topic%type;
begin
    gen_hlp_tkt_details_id := fn_gen_hlp_tkt_details_id();
    
    select topic 
        into hlp_tkt_topic 
        from hlp_tkt_topics 
        where topic_id = p_TOPIC_ID;
    
    p_HLP_TKT_ID := gen_hlp_tkt_details_id;
       insert into hlp_tkt_details
       values ( p_HLP_TKT_ID,       
                p_MESSAGE,
                p_TOPIC_ID,
                p_USER_ID,
                p_RPLY_ADMIN_ID,
                p_RPLY_MESSAGE,
                hlp_tkt_topic
            );
end;
/
