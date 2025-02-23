-- for updating data into table jobseeker_details
create or replace procedure sp_update_jobseeker_details(
    p_JOBSEEKER_ID        in jobseeker_details.jobseeker_id%type,
    p_USER_ID             in jobseeker_details.USER_ID%type,    
    p_SCHOOL              in jobseeker_details.SCHOOL%type,
    p_SCHOOL_2            in jobseeker_details.SCHOOL_2%type,
    p_GRADUATION          in jobseeker_details.GRADUATION%type,
    p_MASTERS             in jobseeker_details.MASTERS%type,
    p_CERTIFICATIONS      in jobseeker_details.CERTIFICATIONS%type,
    p_DESCR               in jobseeker_details.DESCR%type
)
is
begin    
     update jobseeker_details set
        jobseeker_id =      p_JOBSEEKER_ID,
        user_id =           p_USER_ID,
        school =            p_SCHOOL,
        school_2 =          p_SCHOOL_2,
        graduation =        p_GRADUATION,
        masters =           p_MASTERS,
        certifications =    p_CERTIFICATIONS,
        descr =             p_DESCR
    where jobseeker_id = p_JOBSEEKER_ID;
end;
/