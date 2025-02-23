create or replace view vw_employer_details
as
    select ed.*,ui.f_name,ui.l_name 
    from employer_details ed
    left join user_info ui 
    on ui.user_id = ed.user_id;
    
select * from vw_employer_details;