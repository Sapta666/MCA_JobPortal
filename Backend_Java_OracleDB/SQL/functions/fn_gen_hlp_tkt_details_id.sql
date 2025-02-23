create or replace function fn_gen_hlp_tkt_details_id
    return varchar2
is 
    v_seq_num number;
    v_seq_str varchar2(20);
begin
    select seq_hlp_tkt_details_id.nextval into v_seq_num from dual;
    v_seq_str := 'hlpTktDet' || v_seq_num;

    return v_seq_str;
end fn_gen_hlp_tkt_details_id;

drop function fn_gen_hlp_tkt_details_id;