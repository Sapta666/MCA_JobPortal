-- for inserting data into table job applications
create or replace procedure sp_insert_into_job_applications(
    p_JOB_APP_ID        out job_applications.job_app_id%type,
    p_JOBSEEKER_ID      in  job_applications.jobseeker_id%type,
    p_JOB_POST_ID       in  job_applications.job_post_id%type,
    p_JOB_APP_NUM_DAT   in  job_applications.job_app_num_dat%type,
    p_JOB_APP_DEC_TIME  in  job_applications.job_app_dec_time%type,
    p_PRE_APP_ID        in  job_applications.pre_app_id%type
)
is
    gen_job_post_application_id job_applications.job_app_id%type;
begin
    gen_job_post_application_id := fn_gen_job_application_id();
    
    p_JOB_APP_ID := gen_job_post_application_id;
       insert into job_applications
       values ( gen_job_post_application_id,       
                p_JOBSEEKER_ID,     
                p_JOB_POST_ID,      
                p_JOB_APP_NUM_DAT,  
                p_JOB_APP_DEC_TIME, 
                p_PRE_APP_ID       
            );
end;
/
