create or replace function fn_gen_employer_id
    return varchar2
is 
    v_seq_num number;
    v_seq_str varchar2(20);
begin
    select seq_employer_id.nextval into v_seq_num from dual;
    v_seq_str := 'emp' || v_seq_num;

    return v_seq_str;
end fn_gen_employer_id;