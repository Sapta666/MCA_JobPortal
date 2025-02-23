create table job_post_job_details (
    job_post_id varchar2(32),
    job_det_id varchar2(32),
    constraint fk_#job_post_job_details_$job_post_id_#job_posts_$job_post_id foreign key(job_post_id) references job_posts(job_post_id),
    constraint fk_#job_post_job_details_$job_det_id_#job_details_$job_det_id foreign key(job_det_id) references job_details(job_det_id)
);

desc job_post_job_details;

select * from job_post_job_details;