create table hlp_tkt_topics (
    topic_id varchar2(32),
    topic varchar2(32),
    constraint pk_#hlp_tkt_topics_$topic_id primary key(topic_id)
);

desc hlp_tkt_topics;

select * from hlp_tkt_topics;

insert into hlp_tkt_topics values('hlpTktTp001','Software Bugs');
insert into hlp_tkt_topics values('hlpTktTp002','Profile Info');
insert into hlp_tkt_topics values('hlpTktTp003','Job Application');
insert into hlp_tkt_topics values('hlpTktTp004','Accepting Job Application');
insert into hlp_tkt_topics values('hlpTktTp005','Messaging');