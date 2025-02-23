create table user_job_details (
    job_det_id varchar2(32),
    jobseeker_id varchar2(32),
    constraint fk_#user_job_details_$job_det_id_#job_details_$job_det_id foreign key(job_det_id) references job_details(job_det_id),
    constraint fk_#user_job_details_$jobseeker_id_#jobseeker_details_$jobseeker_id foreign key(jobseeker_id) references jobseeker_details(jobseeker_id)
);

desc user_job_details;

select * from user_job_details;