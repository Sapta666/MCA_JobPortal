create table job_posts (
    job_post_id varchar2(32),
    employer_id varchar2(32),
    topic varchar2(128),
    description varchar2(256),
    job_start_num_date integer,
    job_end_num_date integer,
    job_post_num_dat integer,
    job_post_dec_time integer,    
    industry_id varchar2(32),
    job_type_id varchar2(32),
    industry_name varchar(32),
    job_type varchar2(32),
    has_pre_application_data varchar2(1),
    pre_application_question varchar2(256),
    constraint pk_#job_posts_$job_post_id primary key(job_post_id),
    constraint fk_#job_posts_$employer_id_#employer_details_$employer_id foreign key(employer_id) references employer_details(employer_id),
    constraint fk_#job_posts_$industry_id_#industry_type_enum_$industry_id foreign key(industry_id) references industry_type_enum(industry_id),
    constraint fk_#job_posts_$job_type_id_#job_type_enum_$job_type_id foreign key(job_type_id) references job_type_enum(job_type_id)
);

desc job_posts;

select * from job_posts;

alter table job_posts rename column pre_application_data to pre_application_question;