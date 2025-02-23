create table hlp_tkt_details (
    hlp_tkt_id varchar2(32),
    message varchar2(256),
    topic_id varchar2(32),
    user_id varchar2(32),
    rply_admin_id varchar2(32),
    rply_message varchar2(256),
    constraint pk_#hlp_tkt_details_$hlp_tkt_id primary key(hlp_tkt_id),
    constraint fk_#hlp_tkt_details_$topic_#hlp_tkt_topics_$topic_id foreign key(topic_id) references hlp_tkt_topics(topic_id)    
);

desc hlp_tkt_details;

select * from hlp_tkt_details;


