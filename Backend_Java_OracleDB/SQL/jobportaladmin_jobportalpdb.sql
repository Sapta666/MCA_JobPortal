select table_name from user_tables;

desc job_details;

commit;

select table_name from user_tables where table_name like '%ENUM';

select * from user_TYPE_ENUM;

SELECT object_name
FROM user_procedures
WHERE object_type = 'vw';

SELECT view_name
FROM user_views;

desc user_info;

commit;

select * from user_info;
select * from jobseeker_details;
select * from employer_details;

select * from jobseeker_details;

delete from user_info where user_id = 'user207';
delete from jobseeker_details where user_id = 'user207';
delete from employer_details;

rollback;

update employer_details set employer_id = 'emp108' where employer_id = 'user108';

select * from user_type_enum;
desc user_type_enum;

desc HLP_TKT_DETAILS;

select * from HLP_TKT_DETAILS;
select * from chat_history;
select * from chat_info;
desc chat_history;
desc chat_info;

----------------------------

select a.* from job_posts a;

select * from job_applications;

select a.job_post_id,b.jobseeker_id from job_posts a
left join ( select * from job_applications 
            where jobseeker_id = 'user102') b
on b.job_post_id = a.job_post_id;
