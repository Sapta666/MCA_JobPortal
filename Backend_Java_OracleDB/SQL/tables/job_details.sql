create table job_details(
    job_det_id varchar2(32),
    job_name varchar2(64),
    job_descr varchar2(256),
    job_type_id varchar2(32),
    constraint pk_#job_details_$job_det_id primary key(job_det_id),
    constraint fk_#job_details_$job_type_id_#job_type_enum_$job_type_id foreign key(job_type_id) references job_type_enum(job_type_id)
);

desc job_details;

select * from job_details;
