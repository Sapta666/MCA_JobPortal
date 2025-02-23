create table job_applications (
    job_app_id varchar2(32),
    jobseeker_id varchar2(32),
    job_post_id varchar2(32),
    job_app_num_dat integer,
    job_app_dec_time integer,
    pre_app_id varchar2(32),
    constraint pk_#job_application_$job_app_id primary key(job_app_id),
    constraint fk_#job_application_$jobseeker_id_#jobseeker_details_$jobseeker_id foreign key(jobseeker_id) references jobseeker_details(jobseeker_id),
    constraint fk_#job_application_$job_post_id_#job_posts_$job_post_id foreign key(job_post_id) references job_posts(job_post_id),
    constraint fk_#job_application_$pre_app_id_#pre_application_data_$pre_app_id foreign key(pre_app_id) references pre_application_data(pre_app_id)
);

desc job_applications;

select * from job_applications;