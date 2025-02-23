-- for inserting data into table job posts
create or replace procedure sp_insert_into_job_post(
    p_JOB_POST_ID               out job_posts.job_post_id%type,
    p_EMPLOYER_ID               in job_posts.employer_id%type,
    p_TOPIC                     in job_posts.topic%type,
    p_DESCRIPTION               in job_posts.description%type,    
    p_JOB_POST_NUM_DAT          in job_posts.job_post_num_dat%type,
    p_JOB_POST_DEC_TIME         in job_posts.job_post_dec_time%type,
    p_JOB_START_NUM_DATE        in job_posts.job_start_num_date%type,
    p_JOB_END_NUM_DATE          in job_posts.job_end_num_date%type,
    p_INDUSTRY_ID               in job_posts.industry_id%type,
    p_JOB_TYPE_ID               in job_posts.job_type_id%type,
    p_HAS_APPLICATION_DATA      in job_posts.has_pre_application_data%type,
    p_PRE_APPLICATION_QUESTION  in job_posts.pre_application_question%type
)
is
    gen_job_post_id job_posts.job_post_id%type;
    industry_name industry_type_enum.industry_name%type;
    job_type job_type_enum.job_type%type;
begin
    gen_job_post_id := fn_gen_job_post_id();
    
--    getting job type name
    select job_type 
    into job_type 
    from job_type_enum 
    where job_type_id = p_JOB_TYPE_ID;
    
--    getting industry name
    select industry_name 
    into industry_name 
    from industry_type_enum 
    where industry_id = p_INDUSTRY_ID; 
    
    p_JOB_POST_ID := gen_job_post_id;
       insert into job_posts
       values ( gen_job_post_id,       
                p_EMPLOYER_ID,                    
                p_TOPIC,          
                p_DESCRIPTION,
                p_JOB_POST_NUM_DAT,
                p_JOB_POST_DEC_TIME,
                p_JOB_START_NUM_DATE,
                p_JOB_END_NUM_DATE,
                p_INDUSTRY_ID,
                p_JOB_TYPE_ID,
                industry_name,
                job_type,
                p_HAS_APPLICATION_DATA,
                p_PRE_APPLICATION_QUESTION
            );
end;
/
