using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public GameObject enemy;
    public Transform spawnApex;
    public Transform leftSpawnBound;
    public Transform rightSpawnBound;

    private float spawnGap = 3.0f;
    private float nextEnemySpawn = 3.0f;

    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time >= nextEnemySpawn)
        {
            nextEnemySpawn += spawnGap;

            float spawnX = Random.Range(leftSpawnBound.transform.position.x, rightSpawnBound.transform.position.x);
            float spawnY = spawnApex.transform.position.y;
            float spawnZ = 0;
            Instantiate(enemy, new Vector3(spawnX, spawnY, spawnZ), spawnApex.transform.rotation);
        }
    }
}
