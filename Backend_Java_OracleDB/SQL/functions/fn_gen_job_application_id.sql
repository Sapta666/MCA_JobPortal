create or replace function fn_gen_job_application_id
    return varchar2
is 
    v_seq_num number;
    v_seq_str varchar2(20);
begin
    select seq_job_application_id.nextval into v_seq_num from dual;
    v_seq_str := 'jobApp' || v_seq_num;

    return v_seq_str;
end fn_gen_job_application_id;

drop function fn_gen_job_application_id;