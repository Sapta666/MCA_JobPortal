create or replace view vw_jobseeker_details
    as
    select jd.*,ui.f_name,ui.l_name 
    from jobseeker_details jd
    left join user_info ui 
    on ui.user_id = jd.user_id;
    
select * from vw_jobseeker_details;

