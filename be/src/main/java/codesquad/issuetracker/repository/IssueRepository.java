package codesquad.issuetracker.repository;

import codesquad.issuetracker.domain.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long>, IssueRepositoryCustom {



}
