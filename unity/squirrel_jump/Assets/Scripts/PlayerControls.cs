using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerControls : MonoBehaviour
{
    private Rigidbody2D rb;
    public float jumpHeight;

    public Transform groundCheck;
    public float groundCheckRadius;
    public LayerMask whatIsGround;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = new Vector2(0, rb.velocity.y);
        bool onGround = Physics2D.OverlapCircle(groundCheck.position, groundCheckRadius, whatIsGround);

        if (Input.GetMouseButton(0) && onGround)
        {
            rb.velocity = new Vector2(0, jumpHeight);
        }
    }

    void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Enemy")
        {
            Destroy(gameObject);
        }
    }
}
