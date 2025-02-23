create or replace view vw_jobseeker_report
    as
    select jd.jobseeker_id,jd.school,jd.school_2,jd.graduation,jd.masters,jd.certifications,jd.descr,
    ui.*,ja.job_app_cnt,htd.hlp_tkt_cnt
    from jobseeker_details jd
    inner join user_info ui on jd.user_id = ui.user_id
    left join (select user_id,count(*) as hlp_tkt_cnt from hlp_tkt_details group by user_id) htd on htd.user_id = jd.user_id
    left join (select jobseeker_id,count(*) as job_app_cnt from job_applications group by jobseeker_id) ja on ja.jobseeker_id = jd.jobseeker_id;
    
select * from vw_jobseeker_report;

desc vw_jobseeker_report;