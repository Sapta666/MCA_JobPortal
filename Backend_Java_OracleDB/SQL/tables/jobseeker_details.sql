create table jobseeker_details (
    jobseeker_id varchar(32) default '',
    user_id varchar2(32) default '',
    school varchar2(128) default '',
    school_2 varchar2(128) default '',
    graduation varchar2(128) default '',
    masters varchar2(128) default '',
    certifications varchar2(128) default '',
    descr varchar2(256) default '',
    constraint pk_#jobseeker_details_$jobseeker_id primary key(jobseeker_id),
    constraint fk_#jobseeker_details_$user_id_#user_info_$user_id foreign key(user_id) references user_info(user_id)
);

desc jobseeker_details;

select * from jobseeker_details;

