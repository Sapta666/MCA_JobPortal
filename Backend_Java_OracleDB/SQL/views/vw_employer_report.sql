create or replace view vw_employer_report
    as
    select ed.employer_id,ed.organization_name,ed.industry_id,ed.industry_name,
    ui.*,jp.job_post_cnt,htd.hlp_tkt_cnt
    from employer_details ed
    inner join user_info ui on ed.user_id = ui.user_id
    left join (select user_id,count(*) as hlp_tkt_cnt from hlp_tkt_details group by user_id) htd on htd.user_id = ed.user_id
    left join (select employer_id,count(*) as job_post_cnt from job_posts group by employer_id) jp on jp.employer_id = ed.employer_id;
    
select * from vw_employer_report;

desc vw_employer_report;