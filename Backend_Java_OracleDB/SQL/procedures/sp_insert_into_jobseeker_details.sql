-- for inserting data into table jobseeker_details
create or replace procedure sp_insert_into_jobseeker_details(
    p_JOBSEEKER_ID        out jobseeker_details.jobseeker_id%type,
    p_USER_ID             in jobseeker_details.USER_ID%type,    
    p_SCHOOL              in jobseeker_details.SCHOOL%type,
    p_SCHOOL_2            in jobseeker_details.SCHOOL_2%type,
    p_GRADUATION          in jobseeker_details.GRADUATION%type,
    p_MASTERS             in jobseeker_details.MASTERS%type,
    p_CERTIFICATIONS      in jobseeker_details.CERTIFICATIONS%type,
    p_DESCR               in jobseeker_details.DESCR%type
)
is
    gen_jobseeker_id jobseeker_details.jobseeker_id%type;
begin
    gen_jobseeker_id := fn_gen_jobseeker_id();
    p_JOBSEEKER_ID := gen_jobseeker_id;
       insert into jobseeker_details
       values ( gen_jobseeker_id,
                p_USER_ID,
                p_SCHOOL,
                p_SCHOOL_2,
                p_GRADUATION,
                p_MASTERS,
                p_CERTIFICATIONS,
                p_DESCR
            );
end;
/