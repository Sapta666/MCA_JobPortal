create or replace view vw_jobseeker_applications
    as
    select ja.job_app_id,ja.jobseeker_id,ja.job_app_num_dat,ja.job_app_dec_time ,jp.*
    from job_applications ja
    inner join job_posts jp on ja.job_post_id = jp.job_post_id;
    
select * from vw_jobseeker_applications;

desc vw_jobseeker_applications;
