package com.jobportal.services.dao;

import java.util.Iterator;
import java.util.List;

import com.jobportal.models.db.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobportal.models.function.OperationResultDto;
import com.jobportal.utils.DBUtils;
import com.jobportal.utils.HelperUtils;

@Service
public class UserDaoService {
	
	private SessionFactory _sessionFactory = null;
	
	@Autowired private StoredProceduresUserService _storedProceduresUserService;

	@Autowired
	public UserDaoService(DBUtils dbUtils) {
		this._sessionFactory = dbUtils.getSessionFactory();
	}
	
	public UserInfoDto getUserInfoBasedOnName(String user_name) {
		UserInfoDto userInfo = null;
		
		try (Session session = this._sessionFactory.openSession()) {		
			
			String hqlQuery = "from UserInfoDto where user_name = :name";				
			Query<UserInfoDto> query = session.createQuery(hqlQuery,UserInfoDto.class);
			query = query.setParameter("name", user_name);
					
			List<UserInfoDto> userInfoList = query.list();
			if(userInfoList.size() == 1)
				userInfo = userInfoList.get(0);
			
		} catch (Exception e) {
			e.printStackTrace();
		}		
		
		return userInfo;
	}
	
	public UserInfoDto getUserInfoBasedOnUser_ID(String user_id) {
		UserInfoDto userInfo = null;
		
		try (Session session = this._sessionFactory.openSession()){
			Transaction transaction = session.beginTransaction();			
			String sql = "from UserInfoDto where user_id = :userId";
			Query query = session.createQuery(sql, UserInfoDto.class);
			query.setParameter("userId", user_id);
			
			userInfo = (UserInfoDto) query.uniqueResult();			
			
		} catch (Exception e) {
			return null;
		}
		
		return userInfo;
	}

	public OperationResultDto updateUserInfo(UserInfoDto userInfo) {
		OperationResultDto result = new OperationResultDto();
		
		result = this._storedProceduresUserService.updateUserInfo(userInfo);
		
		return result;
	}

	public OperationResultDto<JobseekerDetailsViewDto[]> getJobseekerDetailsViewList() {
		OperationResultDto<JobseekerDetailsViewDto[]> result = new OperationResultDto<JobseekerDetailsViewDto[]>();

		try (Session session = this._sessionFactory.openSession()){
			Transaction transaction = session.beginTransaction();
			String sql = "from JobseekerDetailsViewDto";
			Query query = session.createQuery(sql, EmployerDetailsViewDto.class);

			List<JobseekerDetailsViewDto> employerList = (List<JobseekerDetailsViewDto>)query.list();
			result.set_data(employerList.toArray(new JobseekerDetailsViewDto[0]));
			result.set_isSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.set_isSuccess(false);
			result.set_message(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			return null;
		}

		return result;
	}

	public OperationResultDto<EmployerDetailsViewDto[]> getEmployerList() {
		OperationResultDto<EmployerDetailsViewDto[]> result = new OperationResultDto<EmployerDetailsViewDto[]>();

		try (Session session = this._sessionFactory.openSession()){
			Transaction transaction = session.beginTransaction();
			String sql = "from EmployerDetailsViewDto";
			Query query = session.createQuery(sql, EmployerDetailsViewDto.class);

			List<EmployerDetailsViewDto> employerList = (List<EmployerDetailsViewDto>)query.list();
			result.set_data(employerList.toArray(new EmployerDetailsViewDto[0]));
			result.set_isSuccess(true);
		} catch (Exception e) {
			e.printStackTrace();
			result.set_isSuccess(false);
			result.set_message(HelperUtils.convertStackTraceToString(e));
			e.printStackTrace();
			return null;
		}

		return result;
	}
	
	public EmployerDetailsDto getEmployerInfoBasedOnUser_ID(String user_id) {
		EmployerDetailsDto employerDetails = null;
		
		try (Session session = this._sessionFactory.openSession()){
			Transaction transaction = session.beginTransaction();			
			String sql = "from EmployerDetailsDto where user_id = :userId";
			Query query = session.createQuery(sql, EmployerDetailsDto.class);
			query.setParameter("userId", user_id);
			
			employerDetails = (EmployerDetailsDto) query.uniqueResult();			
			
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
		
		return employerDetails;
	}
	
	public OperationResultDto updateEmployerInfo(EmployerDetailsDto employerDetails) {
		OperationResultDto result = new OperationResultDto();	
		
		result = this._storedProceduresUserService.updateEmployerInfo(employerDetails);
		System.out.println(result.get_isSuccess());
		
		return result;
	}
	
	public JobseekerDetailsDto getJobseekerInfoBasedOnUser_ID(String user_id) {
		JobseekerDetailsDto jobseekerDetails = null;
		
		try (Session session = this._sessionFactory.openSession()){
			Transaction transaction = session.beginTransaction();			
			String sql = "from JobseekerDetailsDto where user_id = :userId";
			Query query = session.createQuery(sql, JobseekerDetailsDto.class);
			query.setParameter("userId", user_id);
			
			jobseekerDetails = (JobseekerDetailsDto) query.uniqueResult();			
			
		} catch (Exception e) {
			return null;
		}
		
		return jobseekerDetails;
	}
	
	public OperationResultDto updateJobseekerInfo(JobseekerDetailsDto jobseekerDetails) {
		OperationResultDto result = new OperationResultDto();
		
		result = this._storedProceduresUserService.updateJobseekerDetails(jobseekerDetails);
		System.out.println(result.get_isSuccess());
		
		return result;
	}

}
